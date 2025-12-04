// not used
// import {createContext, useContext, useEffect, useMemo, useState} from 'react';
// import type {ReactNode} from 'react';

// type Practitioner = {
//     id: number;
//     categorie: string;
//     nom: string;
//     age: number;
//     specialite: string;
//     presentation: string;
//     tarif: string;
//     adresse: string;
//     imagePraticien: string;
//     imageLieu: string;
// };

// type PractitionersContextType = {
//     practitioners: Practitioner[];
//     searchTerm: string;
//     setSearchTerm: (value: string) => void;
//     filteredPractitioners: Practitioner[];
//     isLoading: boolean;
//     error: string | null;
// };

// const PractitionersContext = createContext<PractitionersContextType | null>(null);

// function PractitionersProvider({ children }: { children: ReactNode }) {
//     const [practitioners, setPractitioners] = useState<Practitioner[]>([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null); 

//     useEffect(() => {
//         async function fetchPractitioners() {
//             try {
//                 setIsLoading(true);
//                 const response = await fetch("http://localhost:4242/praticiens");
//                 if (!response.ok) {
//                     throw new Error(`Error servor: ${response.statusText}`);
//                 }
//                 // console.log("Fetching practitioners data...");
//                 const data = (await response.json()) as Practitioner[];
//                 setPractitioners(data);
//                 setError(null);
//             } catch (err) {
//                 console.error("Failed to fetch practitioners:", err);
//             } finally {
//                 setIsLoading(false);
//             }
//         }
//         fetchPractitioners();   
//     }, []);


//     const filteredPractitioners = useMemo(() => {
//         const term = searchTerm.toLowerCase().trim();
//         if (!term) return practitioners;
//         return practitioners.filter((practitioner) =>
//             practitioner.nom.toLowerCase().includes(term) ||
//             practitioner.specialite.toLowerCase().includes(term) ||
//             practitioner.categorie.toLowerCase().includes(term)
//         );
//     }, [practitioners, searchTerm]);

//     const value: PractitionersContextType = {
//         practitioners,
//         searchTerm,
//         setSearchTerm,
//         filteredPractitioners,
//         isLoading,
//         error,
//     };

//     return (
//         <PractitionersContext.Provider value={value}>
//             {children}
//         </PractitionersContext.Provider>
//     );
// }

// export function usePractitioners() {
//     const context = useContext(PractitionersContext);
//     if (!context) {
//         throw new Error("usePractitioners must be used within a PractitionersProvider");
//     }
//     return context;}

// export default PractitionersProvider;