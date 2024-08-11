"use client";
import "@/styles/_notFound.scss";

const NotFound = () => {
  return (
    <>
      <section className="notFound bg-black-gradient">
        <div className="container text-center">
          <h2 className="title text-white">Error 404</h2>
          <p className="sub-title text-white">
            Unfortunately, The page you are looking for is NOT FOUND!
          </p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
