import React from "react";
import TermsAndConditionsImage from "../../../assets/image/premium product bg.png";

const FAQ = () => {
  return (
    <div>
      {/* background image */}
      <div className="relative">
        <img className="h-64 w-full" src={TermsAndConditionsImage} alt="" />
        <div
          style={{
            left: "45%",
            top: "30%",
          }}
          className="absolute"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-white">
            FAQ
          </h1>
          <p className="text-white mt-2 text-xs md:text-base">HOME / FAQ</p>
        </div>
      </div>
      <div className="AP-container text-left">
        <div className="mx-3 xl:mx-0">
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            How does the site work?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Apon Store was founded, keeping in mind the convenience of grocery
            shopping at home.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            You can browse the site or use our search engine to find your
            desired products. You can then add them to your shopping bag and
            click on place order. An Apon Store representative will then deliver
            your order right to your home or office. You can pay us in Cash or
            Bkash once you check the products.
          </p>

          <h1 className="text-2xl font-semibold mt-10 mb-6">
            How much do deliveries cost?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            There is a BDT 40 delivery fee for every order inside Mirpur DOHS
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            How can I contact you?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            You can contact us via Whatsapp, Phone, or Message us on our
            Facebook page.
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            How do I know when my order is here?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Our rider will call you upon arrival.
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6"> How do I pay? </h1>
          <p className="text-sm text-gray-400 mb-6">
            Apon Store accepts Cash On Delivery and Bkash.
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            How do I change my delivery address?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            To change your address, please contact our customer service through
            Facebook messages, Whatsapp or Phone. We will only change your
            delivery address if you are able to verify a change of address.
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            Do you serve my area?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            We are currently serving limited parts of Dhaka, primarily Mirpur
            DOHS. We are expanding our operations to other parts of Dhaka.
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            I can’t find the product I am looking for. What should I do?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            You are welcome to browse our main site – www.AponStore.com – for
            more specific needs.
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            I have an issue with my order. What should I do?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Please contact us through Facebook Direct Messages, Phone or
            Whatsapp, letting us know your order number and issue.
          </p>

          <h1 className="text-2xl font-semibold mt-10 mb-6">
            What if the item is out of stock?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            We try to only list items that we can ensure stock availability of.
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            What happens during a hartal or government shutdown?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            We work during hartals and government shutdowns.That is how
            dedicated we are.
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            Why should we buy from you when I have a store nearby?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            It is safer and more hygienic to remain indoors. Let us do your
            grocery shopping for you.
          </p>
          <h1 className="text-2xl font-semibold mt-10 mb-6">
            How do you deliver?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            We use our own fleet to deliver. Our goal is to deliver the products
            to your place on time.
          </p>

          <h1 className="text-2xl font-semibold mt-10 mb-6">
            What is your policy on refunds?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Apon Store doesn’t refund cash. You can however order another
            product, and we will adjust the price accordingly (in case of
            missing/incorrect item). You must inform Apon Store about a refund
            within 36 hours of a delivery. If informed after 36 hours, it
            remains at Apon Store’s discretion to refund or not based on merit &
            type of the product and its availability.
          </p>

          <h1 className="text-2xl font-semibold mt-10 mb-6">
            Do you offer discounts?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Yes we have attractive daily offers.
          </p>

          <h1 className="text-2xl font-semibold mt-10 mb-6">
            Can I order over the phone?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Yes. You can place an order.
          </p>

          <h1 className="text-2xl font-semibold mt-10 mb-6">
            Should I tip the delivery representative?
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Tips are not required. But our delivery team members appreciate
            recognition for their hard work. Delivery representatives keep the
            entire tip amount.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
