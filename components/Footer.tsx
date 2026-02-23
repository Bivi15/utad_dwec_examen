export default function Footer() {
    return (
        <footer className="bg-zinc-700 text-white mt-10">
            <div className="flex container justify-between mx-auto text-center py-6">
                <h2 className="font-semibold text-lg">Tus productos al instante </h2>
                <p className="text-sm mt-2">
                    Encuentra todo lo que necesitas
                </p>
                <p className="text-xs mt-2">
                    © {new Date().getFullYear()} Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
}