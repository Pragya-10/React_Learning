export default function TabButton({ children, isSelected, ...props }) {
    return (
    <li>
        <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>
    )
}

// export default function TabButton({ label }) {
//     return (
//     <li>
//         <button>{label}</button>
//     </li>
//     )
// }