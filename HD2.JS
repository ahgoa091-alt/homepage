document.addEventListener("DOMContentLoaded", () => {
  const delBtn = document.querySelector(".del");
  const okBtn = document.querySelector(".ok");

  const popupDel = document.getElementById("popupDel");
  const popupOrder = document.getElementById("popupOrder");

  const confirmDel = document.getElementById("confirmDel");
  const cancelDel = document.getElementById("cancelDel");
  const confirmOrder = document.getElementById("confirmOrder");
  const cancelOrder = document.getElementById("cancelOrder");

  const orderTable = document.querySelector("#orderTable tbody");
  const totalPriceEl = document.getElementById("totalPrice");

  const inputs = document.querySelectorAll(
    ".product-card input[type='number']"
  );

  // 🗑 فتح نافذة الحذف
  delBtn.addEventListener("click", () => popupDel.classList.remove("hidden"));
  cancelDel.addEventListener("click", () => popupDel.classList.add("hidden"));

  confirmDel.addEventListener("click", () => {
    let deleted = false;
    inputs.forEach((input) => {
      if (parseInt(input.value) > 0) {
        input.value = 0;
        deleted = true;
      }
    });
    alert(deleted ? "✅ تم حذف الطلبات!" : "⚠️ لا توجد طلبات للحذف.");
    popupDel.classList.add("hidden");
  });

  // ✅ فتح نافذة تأكيد الطلب
  okBtn.addEventListener("click", () => {
    orderTable.innerHTML = "";
    let total = 0;

    document.querySelectorAll(".product-card").forEach((card) => {
      const title = card.querySelector(".product-title").textContent;
      const price = parseFloat(
        card.querySelector(".product-price").textContent
      );
      const qty = parseInt(card.querySelector("input").value);

      if (qty > 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${title}</td><td>${qty}</td><td>${
          qty * price
        }</td>`;
        orderTable.appendChild(row);
        total += qty * price;
      }
    });

    if (total === 0) {
      alert("⚠️ الرجاء اختيار عناصر أولاً.");
      return;
    }

    totalPriceEl.textContent = total.toFixed(2);
    popupOrder.classList.remove("hidden");
  });

  // إلغاء التأكيد
  cancelOrder.addEventListener("click", () =>
    popupOrder.classList.add("hidden")
  );

  // تأكيد الطلب
  confirmOrder.addEventListener("click", () => {
    alert(`✅ تم تأكيد الطلب!\nالإجمالي: ${totalPriceEl.textContent} د.ل`);
    popupOrder.classList.add("hidden");
    
  });
});
