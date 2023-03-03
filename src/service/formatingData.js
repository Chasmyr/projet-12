import Api from "../model/api"

/**
     * An async function which gets from the API or from a mock all necessary data and then return a single object with the good data model
     * @param {number} id 
     * @param {boolean} isCallingBackEnd
     * @returns {Object}
     */
export async function getData(id, isCallingBackEnd) {
    

    const apiToCall = new Api()
    apiToCall.setIsCallingBackEnd(isCallingBackEnd)

    const dataToReturn = {}

    const res1 = await apiToCall.getUser(id)
    if(res1 !== undefined) {
        if(res1.status === 200) {
            dataToReturn['userFirstName'] = res1.data.data.userInfos.firstName
            dataToReturn['keyData'] = res1.data.data.keyData
            dataToReturn['todayScore'] = res1.data.data.todayScore || res1.data.data.score 
        } else {
            dataToReturn['userFirstName'] = res1.userInfos.firstName
            dataToReturn['keyData'] = res1.keyData
            dataToReturn['todayScore'] = res1.todayScore || res1.score 
        }
    }

    const res2 = await apiToCall.getUserActivity(id)
    if(res2 !== undefined) {
        if(res2.status === 200) {
            dataToReturn['activity'] = res2.data.data.sessions
        } else {
            dataToReturn['activity'] = res2.sessions
        }
    }
    

    const res3 = await apiToCall.getUserPerformance(id)
    if(res3 !== undefined) {
        if(res3.status === 200) {
            dataToReturn['performance'] = {
                'value': res3.data.data.data,
                'categories': ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
            }
        } else {
            dataToReturn['performance'] = {
                'value': res3.data,
                'categories': ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
            }
        }
    }
    
    const res4 = await apiToCall.getUserSessions(id)
    if(res4 !== undefined) {
        if(res4.status === 200) {
            dataToReturn['sessions'] = {
                'formatOfWeek': ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
                'value': res4.data.data.sessions
            }
        } else {
            dataToReturn['sessions'] = {
                'formatOfWeek': ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
                'value': res4.sessions
            }
        }
    }
    

    return dataToReturn
}