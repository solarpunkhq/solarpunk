import clsx from 'clsx';

function SubscribeForm({ className }: { className: string }) {
  // const [formState, setFormState] = useState<STATE>(STATE.DEFAULT);
  // const [serverError, setServerError] = useState<null | string>(null);

  return (
    <form className={clsx('relative max-w-[544px] xs:max-w-full', className)}>
      <input
        className="remove-autocomplete-styles placeholder:text-grey-50 h-12 w-full rounded-full pl-[18px] font-medium text-black outline-none placeholder:truncate placeholder:text-15 placeholder:font-normal placeholder:leading-none placeholder:tracking-tight xs:h-11"
        type="text"
        placeholder="Enter your address, neighborhood, city or ZIP code"
      />
      <button
        className="absolute right-1 top-1/2 h-10 -translate-y-1/2 rounded-full bg-black px-4 text-15 xs:relative xs:right-0 xs:top-0 xs:mt-2.5 xs:w-full xs:-translate-y-0"
        aria-label="Subscribe"
      >
        <span className="">Check eligibility</span>
      </button>
      {/* {errors?.email?.message !== '' && (
          <span className="text-primary-red absolute left-0 top-[calc(100%+8px)] text-14 leading-tight tracking-snug">
            {errors?.email?.message}
          </span>
        )}
        {serverError !== null && (
          <span className="text-primary-red absolute left-0 top-[calc(100%+8px)] text-14 leading-tight tracking-snug">
            {serverError}
          </span>
        )} */}
    </form>
  );
}

export default SubscribeForm;
