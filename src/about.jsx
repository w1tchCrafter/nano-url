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
          <ul>
            <li>
              <strong>Fast and Reliable:</strong> Our service ensures quick and
              reliable shortening of your URLs.
            </li>
            <li>
              <strong>Customizable URLs:</strong> You can customize your
              shortened URLs to make them more meaningful and memorable.
            </li>
            <li>
              <strong>Detailed Analytics:</strong> We provide detailed analytics
              and statistics for your shortened URLs, including click tracking
              and geographic data.
            </li>
            <li>
              <strong>User-friendly Interface:</strong> Our platform offers a
              user-friendly interface that makes shortening and managing URLs a
              breeze.
            </li>
            <li>
              <strong>Secure:</strong> We prioritize the security and privacy of
              your data, ensuring that your shortened URLs are safe to use.
            </li>
          </ul>

          <h2>Get Started</h2>
          <p>
            Ready to start shortening your URLs? Sign up for an account today
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
