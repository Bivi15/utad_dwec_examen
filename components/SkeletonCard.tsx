export default function SkeletonCard() {
    return (
        <div className="bg-white rounded-xl shadow p-4 animate-pulse">
            <div className="h-56 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 roundedn w-1/2"></div>
        </div>
    );
}