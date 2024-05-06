import Header from "./Header";

export default function Docs() {
  return (
    <>
      <Header />
      <div className="documentation">
        <section className="docs-title">
          <h1>Documentation</h1>
          <p>
            Welcome to the documentation for nano url. This guide will help you
            understand how to use our service effectively.
          </p>
        </section>
        <section>
          <h2>Shortening URLs</h2>
          <p>
            To shorten a URL, simply paste the long URL into the provided input
            field on our website and click the "shorten url" button. You can
            also customize your shortened URLs with options such as custom
            aliases or expiration dates.
          </p>
        </section>
        <section>
          <h2>API Documentation</h2>
          <p>
            If you plan to integrate our URL shortener into your applications,
            refer to our{" "}
            <a href="https://github.com/w1tchCrafter/nano-url-backend">
              API documentation{" "}
            </a>
            for comprehensive information on how to use our API.
          </p>
        </section>
      </div>
    </>
  );
}
