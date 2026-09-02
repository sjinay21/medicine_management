import Link from "next/link";
function HeroTable({ data }){
    return( 
      <table className="w-full border-4">
        <thead>
          <tr className="text-xl">
            <th className="border-3">Medicine Name</th>
            <th className="border-3">Gram</th>
          </tr>
        </thead>
        <tbody>
          {data.map((M) => (
            <tr key={M.id}>
              <td className="border-3">
                <p className="text-sm font-bold pt-4 px-4">
                  <Link href={`/medicine/${M.id}`}>{M.name}</Link>
                </p>
              </td>
              <td className="border-3">
                <p className="text-sm font-bold pt-4 px-4">
                  {M.gram}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}
export default HeroTable;