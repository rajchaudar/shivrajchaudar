import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import SectionSeparator from "./SectionSeparator"
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa"

function Contacts() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState({ type: "", message: "" })

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)
    setStatus({ type: "info", message: "Sending your message..." })

    emailjs
      .sendForm(
        "default_service",          // ✅ Service ID
        "template_ycc563b",          // ✅ Template ID
        formRef.current,
        "jvwev60ucf7plHs3T"          // ✅ Public Key
      )
      .then(
        () => {
          setSending(false)
          setStatus({
            type: "success",
            message: "Your message has been sent successfully!",
          })
          formRef.current.reset()

          setTimeout(() => {
            setStatus({ type: "", message: "" })
          }, 3000)
        },
        (error) => {
          console.error("EmailJS error:", error)
          setSending(false)
          setStatus({
            type: "error",
            message: "Oops! Something went wrong. Please try again later.",
          })
        }
      )
  }

  return (
    <section
      id="contact"
      className="relative py-32 bg-white/20 text-center"
    >
        <SectionSeparator />
      <h2 className="text-5xl font-bold text-black dark:text-white mb-16">
        Get in Touch
      </h2>

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-white/10 shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT INFO */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">
              Let’s Connect
            </h3>

            <p className="mb-8 text-gray-600 dark:text-gray-300">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <InfoItem icon={<FaEnvelope />} text="chaudarsp@gmail.com" />
            <InfoItem icon={<FaMapMarkerAlt />} text="Pune, Maharashtra, India" />
            <InfoItem icon={<FaGlobe />} text="Available for remote work" />
          </div>

          {/* FORM */}
          <div>
            <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6">
              <h4 className="text-xl font-medium mb-4 text-black dark:text-white">
                Quick Message
              </h4>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="input"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  required
                  className="input"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className={`btn-primary w-full ${
                    sending ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>

                {status.message && (
                  <p
                    className={`text-sm mt-2 ${
                      status.type === "success"
                        ? "text-green-500"
                        : status.type === "error"
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- INFO ITEM ---------- */
function InfoItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 mb-4 text-gray-700 dark:text-gray-300">
      <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  )
}

export default Contacts