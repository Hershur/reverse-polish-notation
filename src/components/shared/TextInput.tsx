
interface TextInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function TextInput({
    label,
    name,
    value,
    onChange
}: TextInputProps) {
    return (
        <div>
            <input 
                type="text"
                name={name} 
                className="rpn-input" 
                id={name} 
                autoComplete="off" 
                value={value}
                onChange={onChange}
                required
            />
            <label htmlFor={name}><span>{label}</span></label>
        </div>
    );
}