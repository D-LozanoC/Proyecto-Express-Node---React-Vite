// David Alexis Lozano Clavijo
// 20221578010

export default function Table({ children }) {
    return (
        <table id="municipiosTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Valor</th>
                    <th>enStock</th>
                    <th>createdOn</th>
                </tr>
            </thead>
            <tbody>
                {
                    children.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.nombre}</td>
                                <td>{data.valor}</td>
                                <td>{data.enStock ? "Hay stock" : "No hay Stock"}</td>
                                <td>{data.createdOn}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}