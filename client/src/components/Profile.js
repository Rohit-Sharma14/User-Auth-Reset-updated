import React, { useState, useEffect } from 'react'
import M from 'materialize-css'
import { useHistory } from 'react-router-dom'

export const Profile = () => {
    const history = useHistory()
    const [data, setData] = useState()
    const [password, setPassword] = useState()
    useEffect(() => {
        fetch('/profile', {
            method: "Post",
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwt")
            },

        })
            .then(res => res.json()).then(result => {
                console.log(result.data.name)
                setData(result.data)
            })
    }, [])

    const checkpwd = () => {
        console.log(password)
        fetch('/check', {
            method: "Post",
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                password
            })
        }).then(res => res.json())
            .then(result => {
                if (result.message) {
                    M.toast({ html: result.message, classes: "#c62828 green darken-3" })
                    history.push('/forgot')
                }
                if (result.error) {
                    console.log(result.error)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const renderdata = () => {
        if (data) {
            return (
                <div className="center" stlye={{ display: "flex" }}>

                    <div>
                        <h1>Name -{data.name}</h1>
                        <h1>Email -{data.email}</h1>
                    </div>





                    <div className="card blue-grey darken-1 "  >
                        <div className="card-content white-text">
                            <span className="card-title">Password</span>
                        </div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={() => checkpwd()}>
                            Submit
                        </button>
                    </div>






                </div>

            )
        } else {
            return (
                <div>
                    <h1>loading</h1>
                </div>
            )
        }
    }

    return (
        <div>
            {renderdata()}
        </div>
    )
}
