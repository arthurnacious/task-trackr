import Link from "next/link";
import Logo from "../logo";

const PageFooter = () => {
  return (
    <footer className="bg-teal-800 text-teal-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Logo withSlogan />
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/terms"
              className="text-teal-200 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-teal-200 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-teal-200 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-5 text-center text-teal-400">
          <p>
            &copy; {new Date().getFullYear()} Task-Trackr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
