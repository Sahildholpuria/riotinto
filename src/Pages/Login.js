import React from "react";

export default function Login() {
    return (
        <>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="text-center">Login/Sign Up</h3>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="phoneNumber">Phone Number</label>
                                        <input
                                            type="tel"
                                            class="form-control"
                                            id="phoneNumber"
                                            placeholder="Enter your Phone Number"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="otp">Enter OTP</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="otp"
                                            placeholder="Enter the Received OTP"
                                        />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <button
                                            type="button"
                                            class="btn btn-success btn-block"
                                            onclick="verifyOtp()"
                                        >
                                            Send OTP
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
