// // axios
// //   .get("http://localhost:3000/api/orders")
// //   .then(({ data }) => {
// //     showOrderList("#order-list", data);
// //   })
// //   .catch((err) => showError("#order-list", err));
// let statuses = [];
// showWaiting();
// axios
//   .get("http://localhost:3000/api/orderStatuses")
//   .then(({ data }) => {
//     statuses = data;
//     return axios.get("http://localhost:3000/api/orders");
//   })
//   .then(({ data }) => {
//     let orders = data.map((o) => {
//       return {
//         ...o,
//         orderStatus: statuses.find((d) => d.id === o.orderStatusId).description,
//       };
//     });
//     showOrderList("#order-list", orders);
//   })
//   .catch((err) => showError("#order-list", err))
//   .finally(() => {
//     setTimeout(hideWaiting, 1500);
//   });

let statusReq = axios.get("http://localhost:3000/api/orderStatuses");
let addressReq = axios.get("http://localhost:3000/api/addresses");
let addressTypeReq = axios.get("http://localhost:3000/api/addressType");
let addresTypes = [];
let statuses = [];
let addresses = [];
showWaiting();
Promise.allSettled([statusReq, addressReq, addressTypeReq])
  .then(([statusRes, addressRes, addressTypeRes]) => {
    if (statusRes.status === "fulfilled") {
      statuses = statusRes.value.data;
    } else {
      window.alert("order status error" + statusRes.reason.message);
    }

    if (addressRes.status === "fulfilled") {
      addresses = addressRes.value.data;
    } else {
      window.alert("address status error" + addressRes.reason.message);
    }

    if (addressTypeRes.status === "fulfilled") {
      addresTypes = addressTypeRes.value.data;
    } else {
      window.alert("address Type status error" + addressTypeRes.reason.message);
    }
    // statuses = statusRes.data;
    // addresses = addressRes.data;
    // addressTypes = addressTypeRes.data;
    return axios.get("http://localhost:3000/api/orders");
  })
  .then(({ data }) => {
    let orders = data.map((d) => {
      const addr = addresses.find((a) => a.id === d.shippingAddress);

      return {
        ...d,
        orderStatus: statuses.find((s) => s.id === d.orderStatusId).description,
        shippingAddressText: `${addr.street} ${addr.city} ${addr.state} ${addr.zipCode}`,
      };
    });

    showOrderList("#order-list", orders);
  })
  .catch((err) => showError("#order-list", err))
  .finally(() => {
    setTimeout(hideWaiting, 1500);
  });
