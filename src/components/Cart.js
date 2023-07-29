import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RemoveToCart } from "../Redux/reducer/ProductSlice";

const Cart = () => {
  const dispatch= useDispatch()
  const { carts } = useSelector((state) => state.products);

  return (
    <>
      <section className="h-100  bg-gradient-to-b from-blue-700 to bg-blue-900 text-white">
                      <div className="p-5 ">
                        <div className="flex flex-row justify-between mt-10">
                          
                          <h6 className="mb-0">{carts.length} items</h6>
                        </div>
                        <hr className="my-4" />
                        {carts && Object.keys(carts).length > 0 ? (
                          carts.map((item, index) => {
                            return(
                              <>
                                <div className="row mb-4 d-flex justify-between">
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={`${item.image}`}
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    <h6 className=" mb-0">
                                      {item.title}
                                    </h6>
                                  </div>
                                  <div className="col-md-3 col-lg-3 columns-2xl d-flex">
                                    <h6 className=" mb-0">
                                      {item.category}
                                    </h6>
                                  </div>
                                  <div className="col-md-3 col-lg-2 col-xl-2">
                                    <h6 className="mb-0">{item.price}</h6>
                                  </div>
                                </div>
                                <div className=" flex flex-row justify-end ">
                                  <button onClick={()=>dispatch(RemoveToCart(item.id))} ><RxCrossCircled/></button>
                                </div>
                                <hr className="my-4" />
                               
                                </>
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
                              <button><AiOutlineArrowLeft/>
                              </button>
                              Back to shop
                
                            </Link>
                          </h6>
                        </div>
                      </div>
   
      </section>
    </>
  );
};

export default Cart;
