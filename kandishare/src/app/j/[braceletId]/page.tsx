'use client';

import { useParams } from "next/navigation";
import BraceletHistoryList from "./BraceletHistoryList";


export default function BraceletPage() {
    const { braceletId } =  useParams();

    if (!braceletId || typeof braceletId !== 'string') return null;

    return (
        <>
            <BraceletHistoryList braceletId={braceletId}/>
        </>
    )
}