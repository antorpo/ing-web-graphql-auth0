const ReservationControls = ({className}) => {
  return (
    <div className={`${className} flex items-center ml-auto`}>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Hacer reservación
      </button>
    </div>
  );
};

export default ReservationControls;
