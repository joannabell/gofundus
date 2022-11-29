function Profiles() {
    return (
        <>
            <div className="page-top-container">
                <img
                    src={"/images/home-page-top.png"}
                    className="page-top-image"
                    alt="page top"
                />
            </div>
            <div className="page-title">
                <div className="page-title-text">lorem ipsem</div>
            </div>
            <div className="container-fluid home-container">
                <div className="row home-row">
                    <div className="col-sm-5 home-image-container">
                        <img
                            src="/images/volunteers-taking-selfie.jpg"
                            className="home-image"
                            alt="volunteers taking selfies"
                        />
                    </div>
                    <div className="col-sm-7 home-text">
                        <p className="home-text-title">lorem ipsem</p>
                        <div>
                            <br />
                        </div>
                        <p>
                            lorem ipsem
                            {/* <a href="#">Read more...</a> */}
                        </p>
                    </div>
                </div>
                <div className="row home-row">
                    <div className="col-sm-7 home-text">
                        <p className="home-text-title">lorem ipsem</p>
                        <div>
                            <br />
                        </div>
                        <p>
                            lorem ipsem
                            {/* <a href="#">Read more...</a> */}
                        </p>
                    </div>
                    <div className="col-sm-5 home-image-container">
                        <img
                            src="/images/clothes-donations.jpg"
                            className="home-image"
                            alt="clothing donation"
                        />
                    </div>
                </div>
                <div className="row home-row">
                    <div className="col-sm-5 home-image-container">
                        <img
                            src="/images/plant-trees.jpg"
                            className="home-image"
                            alt="man with axe"
                        />
                    </div>
                    <div className="col-sm-7 home-text">
                        <p className="home-text-title">lorem ipsem</p>
                        <div>
                            <br />
                        </div>
                        <p>
                            lorem ipsem
                            {/* <a href="#">Read more...</a> */}
                        </p>
                    </div>{" "}
                </div>
            </div>
        </>
    );
}

export default Profiles;
