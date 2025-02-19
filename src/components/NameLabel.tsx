
interface NameLabelProps {
    //todo: 이름 필수로 변경
    name?: string;
}

const nameLabel = ({ name = 'John Doe' }: NameLabelProps) => {

    return (
        <label className="text-white font-bold">
            {name}
        </label>
    )
}

export default nameLabel;
