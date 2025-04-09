export default function Footer() {
  return (
    <footer className="text-black text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MedGuardian. All Rights
        Reserved.
      </p>
    </footer>
  );
}
