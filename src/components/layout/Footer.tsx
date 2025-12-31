export default function Footer() {
  return (
    <footer className="w-full py-4 text-center text-sm text-white bg-black border-t border-gray-800 pt-4">
      © {new Date().getFullYear()} Arfan Siregar. All rights reserved.
    </footer>
  );
}