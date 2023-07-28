import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carts } = useSelector((state) => state.products);

  return (
    <>
      <section className="h-100 h-custom">
        <div className=" py-2 h-100">
          <div className="row d-flex justify-center h-100">
            <div className="col-12">
            <div className=" border-r-8">
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <div className="d-flex justify-between mb-5">
                          <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                          <h6 className="mb-0 text-muted">{carts.length} items</h6>
                        </div>
                        <hr className="my-4" />
                        {carts && Object.keys(carts).length > 0 ? (
                          carts.map((item, index) => {
                            return (
                              <React.Fragment key={index}>
                                <div className="row mb-4 d-flex justify-between">
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={`${item.image}`}
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    <h6 className="text-black mb-0">
                                      {item.title}
                                    </h6>
                                  </div>
                                  <div className="col-md-3 col-lg-3 columns-2xl d-flex">
                                    <h6 className="text-black mb-0">
                                      {item.category}
                                    </h6>
                                  </div>
                                  <div className="col-md-3 col-lg-2 col-xl-2">
                                    <h6 className="mb-0">{item.price}</h6>
                                  </div>
                                </div>
                                <hr className="my-4" />
                              </React.Fragment>
                            );
                          })
                        ) : (
                          <h2 className="text-center">
                            Cart is Empty! Shop Now
                          </h2>
                        )}

                        <div class="pt-5 d-flex">
                          <h6 class="mb-0">
                            <Link to={"/"}>
                              <i class="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
