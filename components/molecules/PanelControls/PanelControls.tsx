import Link from "next/link";

const PanelControls = () => {
    return <div className="bg-gray-200 px-4 pt-2 pb-3 border border-gray-300 shadow gap-2 flex w-full justify-center">
        <Link href="/restaurants"><button className="button-smigolf">Restaurantes</button></Link>
        <Link href="/reservations"><button className="button-smigolf">Reservaciones</button></Link>
    </div>;
};

export default PanelControls;
