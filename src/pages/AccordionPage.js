
import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
        {
            key: 'alheit',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project You can use React on any projectYou can use React on any projectYou can use React on any project'
            
        },
        {
            key: 'ghaeyle',
            label: 'Can I use Javascript on a project?',
            content: 'You can use React on any project You can use React on any projectYou can use React on any projectYou can use React on any project'
            
        },
        {
            key: 'third',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project You can use React on any projectYou can use React on any projectYou can use React on any project'
            
        }
        
    ]
    return (
        <Accordion items={items}/>
    )
}

export default AccordionPage;