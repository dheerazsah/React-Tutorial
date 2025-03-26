import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    //const [authors, setAuthors] = useState(["Mario", "Yoshi"]); // Default authors
    const [authors, setAuthors] = useState(() => {
        // Get authors from localStorage if they exist
        const storedAuthors = localStorage.getItem('authors');
        return storedAuthors ? JSON.parse(storedAuthors) : ["Dhiraj", "Anmiesh", "Sajjan"];
    });

    const [author, setAuthor] = useState(authors[0]); 
    const [newAuthor, setNewAuthor] = useState("");
    const [date, setDate] = useState(() => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('en-US', options);
    });
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, date };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        });
    };

    

    const handleAddAuthor = () => {
        if (newAuthor && !authors.includes(newAuthor)) {
            const updatedAuthors = [...authors, newAuthor];
            setAuthors(updatedAuthors);
            setAuthor(newAuthor); // Automatically select the new author
            setNewAuthor(''); // Clear input field

            // Save the updated authors list to localStorage
            localStorage.setItem('authors', JSON.stringify(updatedAuthors));
        }
    };

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={ title }
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={ body }
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <div className="author-dropdown">
                    <select 
                        value={author} 
                        onChange={(e) => {
                            if (e.target.value === 'add-new') {
                                setAuthor('');
                            } else {
                                setAuthor(e.target.value);
                            }
                        }}
                    >
                        {authors.map((auth, index) => (
                            <option key={index} value={auth}>{auth}</option>
                        ))}
                        <option value="add-new">+ Add New Author</option>
                    </select>

                    {author === '' && (
                        <div className="new-author-input">
                            <input
                                type="text"
                                value={newAuthor}
                                onChange={(e) => setNewAuthor(e.target.value)}
                                placeholder="Enter new author"
                            />
                            <button type="button" onClick={handleAddAuthor}>Add Author</button>
                        </div>
                    )}
                </div>

                <label>Blog date:</label>
                <input 
                    type="text"
                    value={date}
                    readOnly
                />
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
      );
}
 
export default Create;