import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaComments } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // ícono de cierre

export const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="inline-flex items-center gap-2 underline hover:no-underline transition-all"
      >
        <FaComments />
        Get my contact here
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          {/* Fondo oscuro */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          {/* Panel del modal */}
          <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-xs bg-white text-black p-6 shadow-lg border border-gray-300">

                {/* Botón de cierre */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-black transition-colors"
                  aria-label="Close modal"
                >
                  <IoClose className="w-5 h-5" />
                </button>

                <img
                  src="/img/jo2.png"
                  alt="Business card illustration"
                  className="w-[250px] h-auto object-cover mb-4"
                />
                <div className="text-center">
                  <p className="font-extrabold text-sm mb-1">
                    Software Engineer | JavaScript Fullstack
                  </p>
                  <p className="text-sm text-gray-800">jesusjho26@gmail.com</p>
                  <p className="text-sm text-gray-800">+52 633 129 2756</p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
