import { getCars } from '@/lib/api';


export async function generateStaticParams() {
    const cars = await getCars();
    return cars.map((car) => ({
        id: car.id.toString(),
    }));
}

export default function Page() {
    return <CarDetailPage />;
}
