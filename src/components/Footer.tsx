export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1 fw-semibold">
          Sahel Hive Tradelink
        </p>
        <small>
          Remote-First Procurement & Marketing Company <br />
          © {new Date().getFullYear()} All Rights Reserved
        </small>
      </div>
    </footer>
  );
}
