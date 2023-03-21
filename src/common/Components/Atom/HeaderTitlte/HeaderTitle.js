import './HeaderTitle.css';

export default function HeaderTitle(props) {
    let containerClass = props.containerClass;

    if (props.containerClass) {
        containerClass = containerClass + " title-header"
    } else {
        containerClass = "title-header"
    }

    return <div className={containerClass}>
        {
            props.title
        }
    </div>
}