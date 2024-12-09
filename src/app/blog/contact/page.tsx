import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6  rounded-lg shadow-lg mt-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 mx-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Kontakt meg
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Vi vil gjerne høre fra deg!
          </p>
        </div>
        <div className="text-center text-gray-600 space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <EnvelopeIcon className="w-6 h-6 text-purple-600" />
            <p className="ml-2 text-lg font-medium">Email:</p>
            <p className="text-purple-600 ml-2">ioan-daniel.turc@funkweb.org</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <PhoneIcon className="w-6 h-6 text-purple-600" />
            <p className="ml-2 text-lg font-medium">Phone:</p>
            <p className="text-purple-600 ml-2">+47 48620059</p>
          </div>
          {/* Location and Map section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <MapPinIcon className="w-6 h-6 text-purple-600" />
              <p className="ml-2 text-lg font-medium">Location:</p>
              <p className="text-purple-600 ml-2">Oslo, Norway</p>
            </div>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10600.78733822601!2d10.743710764888855!3d59.91292972061916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e67e693425d%3A0x408fddf807c7b20!2sOslo!5e0!3m2!1sen!2sno!4v1616579927509!5m2!1sen!2sno"
                width="100%"
                height="200"
                allowFullScreen
                loading="lazy"
                className="rounded-md shadow-md"
              ></iframe>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center space-x-4">
            <Link
              href="https://www.facebook.com"
              className="text-blue-600 hover:text-indigo-900"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .733.591 1.324 1.325 1.324h11.498v-9.294h-3.125v-3.622h3.125v-2.67c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.919c-1.505 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.621h-3.12v9.294h6.114c.733 0 1.324-.591 1.324-1.324v-21.351c0-.734-.591-1.325-1.324-1.325z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com"
              className="text-indigo-600 hover:text-indigo-900"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.579c0-1.331-.025-3.042-1.847-3.042-1.848 0-2.131 1.44-2.131 2.923v5.698h-3.553v-11.6h3.413v1.585h.049c.475-.898 1.638-1.839 3.368-1.839 3.606 0 4.272 2.377 4.272 5.465v6.889zM5.337 8.51h-.025c-1.115 0-1.959-.863-1.959-1.942 0-1.082.845-1.944 1.943-1.944 1.092 0 1.943.862 1.943 1.944 0 1.079-.851 1.942-1.944 1.942zm1.777 11.942h-3.554v-11.6h3.553v11.6z" />
              </svg>
            </Link>
            <Link
              href="https://github.com"
              className="text-gray-700 hover:text-gray-900"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.205 11.387.6.111.818-.26.818-.577 0-.285-.011-1.237-.017-2.245-3.338.724-4.042-1.613-4.042-1.613-.546-1.38-1.333-1.748-1.333-1.748-1.086-.742.083-.727.083-.727 1.205.085 1.838 1.235 1.838 1.235 1.07 1.834 2.809 1.303 3.492.996.108-.774.419-1.303.762-1.603-2.665-.303-5.467-1.335-5.467-5.931 0-1.312.469-2.384 1.238-3.22-.125-.303-.536-1.53.117-3.185 0 0 1.008-.322 3.301 1.229a11.528 11.528 0 0 1 3.005-.403c1.017.004 2.043.139 3.005.403 2.293-1.551 3.301-1.229 3.301-1.229.653 1.655.243 2.882.119 3.185.77.836 1.238 1.908 1.238 3.22 0 4.607-2.804 5.623-5.472 5.916.43.37.817 1.098.817 2.21 0 1.594-.014 2.878-.017 3.267 0 .319.216.692.825.577A12.019 12.019 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
