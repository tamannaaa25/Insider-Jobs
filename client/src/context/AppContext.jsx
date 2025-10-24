import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    })

    const [isSearched, setIsSearched] = useState(false)

    const [jobs, setJobs] = useState([])

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)

    const [companyToken, setCompanyToken] = useState(null)
    const [companyData, setCompanyData] = useState(null)

    const [userToken, setUserToken] = useState(null)
    const [userData, setUserData] = useState(null)
    const [userApplications, setUserApplications] = useState([])
    const [userDataLoading, setUserDataLoading] = useState(true)

    // Function to Fetch Jobs 
    const fetchJobs = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/jobs', { withCredentials: true })

            if (data.success) {
                setJobs(data.jobs)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    // Function to Fetch Company Data
    const fetchCompanyData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/company/company', { headers: { token: companyToken } })

            if (data.success) {
                setCompanyData(data.company)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    // Function to Fetch User Data
    const fetchUserData = async () => {
        try {
            setUserDataLoading(true)

            if (!userToken) {
                setUserDataLoading(false)
                return
            }

            const { data } = await axios.get(backendUrl + '/api/users/user',
                { headers: { token: userToken } })

            if (data.success) {
                setUserData(data.user)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setUserDataLoading(false)
        }
    }

    // Function to Fetch User's Applied Applications
    const fetchUserApplications = async () => {
        try {

            if (!userToken) {
                return
            }

            const { data } = await axios.get(backendUrl + '/api/users/applications',
                { headers: { token: userToken } }
            )
            if (data.success) {
                setUserApplications(data.applications)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    // Retrieve Company Token From LocalStorage
    useEffect(() => {
        fetchJobs()

        const storedCompanyToken = localStorage.getItem('companyToken')
        const storedUserToken = localStorage.getItem('userToken')

        if (storedCompanyToken) {
            setCompanyToken(storedCompanyToken)
        }

        if (storedUserToken) {
            setUserToken(storedUserToken)
        } else {
            setUserDataLoading(false)
        }

    }, [])

    // Fetch Company Data if Company Token is Available
    useEffect(() => {
        if (companyToken) {
            fetchCompanyData()
        }
    }, [companyToken])

    // Fetch User's Applications & Data if User Token is Available
    useEffect(() => {
        if (userToken) {
            fetchUserData()
            fetchUserApplications()
        } else {
            setUserDataLoading(false)
        }
    }, [userToken])

    const value = {
        setSearchFilter, searchFilter,
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin,
        showUserLogin, setShowUserLogin,
        companyToken, setCompanyToken,
        companyData, setCompanyData,
        backendUrl,
        userToken, setUserToken,
        userData, setUserData,
        userApplications, setUserApplications,
        fetchUserData,
        fetchUserApplications,
        userDataLoading,

    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)

}