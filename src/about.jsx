import Header from "./Header.jsx";

export default function About() {
  return (
    <>
      <Header />
      <center>
        <div className="about">
          <h1>About Our URL Shortener</h1>
          <p>
            Welcome to nano url! We provide a simple and efficient way to
            shorten long URLs into shorter ones that are easier to share and
            manage.
          </p>

          <h2>Why Choose Us?</h2>
          <p>
            There are several reasons why you should choose our URL shortener:
          </p>
          <ul className="features-list">
            <li>Fast and Reliable</li>
            <li>Customizable URLs</li>
            <li>User-friendly Interface</li>
            <li>Secure: We ensure your shortened URLs are safe to use.</li>
          </ul>

          <h2>Get Started</h2>
          <p>
            Ready to start shortening your URLs? Just go to the{" "}
            <a href="/">home page </a>
            and gain access to all the features our URL shortener has to offer!
          </p>

          <p>
            If you have any questions or feedback, feel free to{" "}
            <a href="/contact">contact us</a>. We're here to help!
          </p>
        </div>
      </center>
    </>
  );
}
