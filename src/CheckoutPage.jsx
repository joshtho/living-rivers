import { useRef } from "react";

export default function CheckoutPage() {
  const formRef = useRef(null);

  const handleScrollToCheckout = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="bg-white rounded-2xl shadow-lg max-w-xl w-full flex flex-col items-center overflow-hidden p-8">
        <img src="/images/explore-your-nature.jpeg" alt="Product" className="rounded-lg mb-4" />
        <button
          onClick={handleScrollToCheckout}
          className="mb-4 px-6 py-2 bg-green-900 text-white rounded font-semibold shadow hover:bg-green-800 transition cursor-pointer"
        >
          Scroll to Checkout
        </button>
        <h2 className="text-xl font-bold mb-2 text-center">Explore Your Nature</h2>
        <p className="text-gray-600 mb-4 text-center">
          Just fill out your info to unlock instant access to Jordan Rivers course on how to "Explore your Nature"
        </p>
        <div className="text-2xl font-bold text-green-900 mb-2">$33.00</div>
        <div className="text-green-600 font-semibold mb-4">You’re almost there!</div>
        <img src="/images/receive.png" alt="what youll get" className="rounded-lg mb-4" />
        <p className="mb-6 text-gray-700 text-center">
          {/* You can shorten or customize this description */}
            

            Proin non velit ligula. Sed sollicitudin euismod eleifend. Praesent faucibus eleifend erat, et sagittis odio porta sed. Mauris tincidunt porttitor convallis. Nunc ullamcorper viverra velit, ac aliquam lorem. Cras feugiat diam pretium pretium pretium. Sed iaculis metus eget varius lacinia. Pellentesque tempor, justo ut elementum pharetra, dolor tortor pharetra quam, quis iaculis mi justo luctus orci. Sed scelerisque urna eros, id faucibus turpis sodales non. Nulla facilisi. Donec pretium ante turpis, eu mollis quam dignissim ac. Suspendisse potenti. Integer finibus rhoncus porttitor. Nam pellentesque justo tellus, sit amet pretium orci fermentum vitae.

            Pellentesque eu condimentum urna. In hac habitasse platea dictumst. Suspendisse ante enim, ullamcorper et porta vitae, pulvinar non mauris. Nullam vel cursus nisi, vitae malesuada metus. Donec ut dapibus leo. Nullam commodo, elit at vulputate fermentum, ligula justo tincidunt quam, ut mollis neque nulla a nisi. Nunc posuere lectus sed purus tristique pulvinar. Aliquam commodo mattis molestie. Nunc lobortis, lorem eu convallis tincidunt, justo dolor ornare dolor, a ultrices ligula dolor a eros. Aenean sit amet vestibulum ex, in auctor ipsum. Curabitur tincidunt, purus pretium lacinia pulvinar, diam leo varius quam, ac cursus quam odio et sem. Morbi rutrum faucibus iaculis.

            Nullam fringilla vestibulum venenatis. Aliquam a scelerisque ante. Vivamus molestie velit in augue vulputate pulvinar. Pellentesque dignissim nisl ut risus faucibus pretium. Aenean a risus id metus varius iaculis. Nam eget eleifend ipsum. Nullam non volutpat dolor, id lacinia tortor. Sed mattis urna sit amet tortor placerat, vel pulvinar leo lobortis. Nulla pellentesque ex nec lorem viverra, ut ornare diam interdum.
        </p>
        {/* Square Checkout Button */}
        <div ref={formRef} className="w-full flex flex-col items-center">
            <br/>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Ready to explore your nature?</h1>
            <p className="text-gray-600 text-sm items-center">Click below for a one on one exploration with a trusted guide:</p>
          <a
            href="https://square.link/u/JaOryQ09"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-200 text-black py-3 rounded font-bold text-lg mt-4 hover:bg-gray-300 transition cursor-pointer text-center flex items-center justify-center gap-2"
          >
            <img
              src="/images/Square_LogoLockup_Black.png"
              alt="Square"
              className="h-18 w-auto"
            />
            (33.00 USD)
          </a>
          <br/>
          <p className="text-gray-600 text-sm items-center">Or click this link to receive the download and explore solo:</p>
          <a
            href="https://square.link/u/jRQ9akdZ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-200 text-black py-3 rounded font-bold text-lg mt-4 hover:bg-gray-300 transition cursor-pointer text-center flex items-center justify-center gap-2"
          >
            <img
              src="/images/Square_LogoLockup_Black.png"
              alt="Square"
              className="h-18 w-auto"
            />
            (9.00 USD)
          </a>
          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 11V7a4 4 0 1 1 8 0v4M5 11V7a7 7 0 0 1 14 0v4M5 11v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V11"></path></svg>
            <span className="text-gray-600 text-sm">100% Secure Checkout</span>
          </div>
        </div>
      <footer className="mt-8 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Jordan Rivers. All rights reserved.</p>
      </footer>
      </div>

    </div>
  );
}