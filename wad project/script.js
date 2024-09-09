document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: "Handmade Necklace", price: "Rs.250", img: "images/necklace.jpg", material: "Silver", description: "A beautiful handmade silver necklace.", quantity: "5 in stock" },
        { id: 2, name: "Handmade Bracelet", price: "Rs.100", img: "images/bracelet.jpg", material: "Leather", description: "A stylish handmade leather bracelet.", quantity: "10 in stock" },
        { id: 3, name: "Handmade Earrings", price: "Rs.60", img: "images/earrings.jpg", material: "Gold", description: "Elegant handmade gold earrings.", quantity: "8 in stock" },
        { id: 4, name: "Handmade Earrings", price: "Rs.60", img: "images/earrings.jpg", material: "Gold", description: "Elegant handmade gold earrings.", quantity: "8 in stock" },
    ];

    const productContainer = document.querySelector(".product-list");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productDiv.addEventListener("click", () => openProductModal(product));
        productContainer.appendChild(productDiv);
    });

    // Create product modal element
    const productModal = document.createElement("div");
    productModal.classList.add("modal");
    productModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="product-modal-title"></h2>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <img id="product-modal-img" src="" alt="">
                <p id="product-modal-description"></p>
                <p><strong>Material:</strong> <span id="product-modal-material"></span></p>
                <p><strong>Price:</strong> <span id="product-modal-price"></span></p>
                <p><strong>Quantity:</strong> <span id="product-modal-quantity"></span></p>
            </div>
        </div>
    `;
    document.body.appendChild(productModal);

    const productModalTitle = document.getElementById("product-modal-title");
    const productModalImg = document.getElementById("product-modal-img");
    const productModalDescription = document.getElementById("product-modal-description");
    const productModalMaterial = document.getElementById("product-modal-material");
    const productModalPrice = document.getElementById("product-modal-price");
    const productModalQuantity = document.getElementById("product-modal-quantity");
    const productModalClose = productModal.querySelector(".modal-close");

    function openProductModal(product) {
        productModalTitle.textContent = product.name;
        productModalImg.src = product.img;
        productModalImg.alt = product.name;
        productModalDescription.textContent = product.description;
        productModalMaterial.textContent = product.material;
        productModalPrice.textContent = product.price;
        productModalQuantity.textContent = product.quantity;
        productModal.style.display = "block";
    }

    productModalClose.addEventListener("click", () => {
        productModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == productModal) {
            productModal.style.display = "none";
        }
    });

    // Create contact form modal element
    const contactModal = document.createElement("div");
    contactModal.classList.add("modal");
    contactModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Thank You!</h2>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>Thank you for your message! We will get back to you soon.</p>
            </div>
        </div>
    `;
    document.body.appendChild(contactModal);

    const contactModalClose = contactModal.querySelector(".modal-close");

    contactModalClose.addEventListener("click", () => {
        contactModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        contactModal.style.display = "block";
        contactForm.reset();
    });
});