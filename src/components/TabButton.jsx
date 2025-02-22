
// children here is to add the values bewteen <TabButton>.....(THIS) here</TabButton> without doing this it doesnt know where to add those and wont add
// if you want to add stuffs bewteen them use children key word as props or seconnd day using label/or any word

// Syntax for children in app should be <TabButton >Button here</TabButton>
// export default function TabButton({children}){
//     return (<li>
//     <button>{children}</button>
//     </li>);
// };


// Syntax for label in app should be <TabButton label='Button here'>Button here</TabButton>

export default function TabButton({children,onSelect,isActive}){
    return (<li>
    {/* dont add handleclick() that will automatically call function before click as it runs that line */}
    <button className = {isActive ? 'active':null} onClick={onSelect}>{children}</button>
    </li>);
};