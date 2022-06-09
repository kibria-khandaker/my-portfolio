import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactFormRequestMe = () => {
  const [state, handleSubmit] = useForm("xpzbnrkv");
  if (state.succeeded) {
    return <p> Thanks for sending your Request/Inquiry , i will back soon </p>;
  }
  return (



    <form onSubmit={handleSubmit} className=' flex flex-col gap-4 mt-8 mb-10'>
      <input
        id="name"
        type="text"
        name="name"
        className='input input-bordered kib_inside_effect'
        placeholder='Type Your Name'
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <input
        id="email"
        type="email"
        name="email"
        className='input input-bordered kib_inside_effect'
        placeholder='Your Email'
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className='input input-bordered kib_inside_effect'
        placeholder='Type Your Text'
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        class="w-2/5 kib_inside_effect py-2 px-5 text-[#8a92a5] rounded"
      >
        Send
      </button>
    </form>




  );
}

export default ContactFormRequestMe;