/* tslint:disable */
/* eslint-disable */
/**
 * Waiting List Api
 * Ambulance Waiting List management for Web-In-Cloud system
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: <your_email>
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * Describes disease, symptoms, or other reasons of patient   visit
 * @export
 * @interface Condition
 */
export interface Condition {
    /**
     * 
     * @type {string}
     * @memberof Condition
     */
    'value': string;
    /**
     * 
     * @type {string}
     * @memberof Condition
     */
    'code'?: string;
    /**
     * Link to encyclopedical explanation of the patient\'s condition
     * @type {string}
     * @memberof Condition
     */
    'reference'?: string;
    /**
     * 
     * @type {number}
     * @memberof Condition
     */
    'typicalDurationMinutes'?: number;
}
/**
 * 
 * @export
 * @interface WaitingListEntry
 */
export interface WaitingListEntry {
    /**
     * Unique id of the entry in this waiting list
     * @type {string}
     * @memberof WaitingListEntry
     */
    'id': string;
    /**
     * Name of patient in waiting list
     * @type {string}
     * @memberof WaitingListEntry
     */
    'name'?: string;
    /**
     * Unique identifier of the patient known to Web-In-Cloud system
     * @type {string}
     * @memberof WaitingListEntry
     */
    'patientId': string;
    /**
     * Timestamp since when the patient entered the waiting list
     * @type {string}
     * @memberof WaitingListEntry
     */
    'waitingSince': string;
    /**
     * Estimated time of entering ambulance. Ignored on post.
     * @type {string}
     * @memberof WaitingListEntry
     */
    'estimatedStart'?: string;
    /**
     * Estimated duration of ambulance visit. If not provided then it will be computed based on condition and ambulance settings
     * @type {number}
     * @memberof WaitingListEntry
     */
    'estimatedDurationMinutes': number;
    /**
     * 
     * @type {Condition}
     * @memberof WaitingListEntry
     */
    'condition'?: Condition;
}

/**
 * AmbulanceConditionsApi - axios parameter creator
 * @export
 */
export const AmbulanceConditionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * By using ambulanceId you get list of predefined conditions
         * @summary Provides the list of conditions associated with ambulance
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConditions: async (ambulanceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('getConditions', 'ambulanceId', ambulanceId)
            const localVarPath = `/waiting-list/{ambulanceId}/condition`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AmbulanceConditionsApi - functional programming interface
 * @export
 */
export const AmbulanceConditionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AmbulanceConditionsApiAxiosParamCreator(configuration)
    return {
        /**
         * By using ambulanceId you get list of predefined conditions
         * @summary Provides the list of conditions associated with ambulance
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConditions(ambulanceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Condition>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConditions(ambulanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AmbulanceConditionsApi - factory interface
 * @export
 */
export const AmbulanceConditionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AmbulanceConditionsApiFp(configuration)
    return {
        /**
         * By using ambulanceId you get list of predefined conditions
         * @summary Provides the list of conditions associated with ambulance
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConditions(ambulanceId: string, options?: any): AxiosPromise<Array<Condition>> {
            return localVarFp.getConditions(ambulanceId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AmbulanceConditionsApi - interface
 * @export
 * @interface AmbulanceConditionsApi
 */
export interface AmbulanceConditionsApiInterface {
    /**
     * By using ambulanceId you get list of predefined conditions
     * @summary Provides the list of conditions associated with ambulance
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceConditionsApiInterface
     */
    getConditions(ambulanceId: string, options?: AxiosRequestConfig): AxiosPromise<Array<Condition>>;

}

/**
 * AmbulanceConditionsApi - object-oriented interface
 * @export
 * @class AmbulanceConditionsApi
 * @extends {BaseAPI}
 */
export class AmbulanceConditionsApi extends BaseAPI implements AmbulanceConditionsApiInterface {
    /**
     * By using ambulanceId you get list of predefined conditions
     * @summary Provides the list of conditions associated with ambulance
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceConditionsApi
     */
    public getConditions(ambulanceId: string, options?: AxiosRequestConfig) {
        return AmbulanceConditionsApiFp(this.configuration).getConditions(ambulanceId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AmbulanceWaitingListApi - axios parameter creator
 * @export
 */
export const AmbulanceWaitingListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Use this method to store new entry into the waiting list.
         * @summary Saves new entry into waiting list
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {WaitingListEntry} waitingListEntry Waiting list entry to store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWaitingListEntry: async (ambulanceId: string, waitingListEntry: WaitingListEntry, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('createWaitingListEntry', 'ambulanceId', ambulanceId)
            // verify required parameter 'waitingListEntry' is not null or undefined
            assertParamExists('createWaitingListEntry', 'waitingListEntry', waitingListEntry)
            const localVarPath = `/waiting-list/{ambulanceId}/entries`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(waitingListEntry, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Use this method to delete the specific entry from the waiting list.
         * @summary Deletes specific entry
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {string} entryId pass the id of the particular entry in the waiting list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWaitingListEntry: async (ambulanceId: string, entryId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('deleteWaitingListEntry', 'ambulanceId', ambulanceId)
            // verify required parameter 'entryId' is not null or undefined
            assertParamExists('deleteWaitingListEntry', 'entryId', entryId)
            const localVarPath = `/waiting-list/{ambulanceId}/entries/{entryId}`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)))
                .replace(`{${"entryId"}}`, encodeURIComponent(String(entryId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * By using ambulanceId you get list of entries in ambulance    witing  list
         * @summary Provides the ambulance waiting list
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWaitingListEntries: async (ambulanceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('getWaitingListEntries', 'ambulanceId', ambulanceId)
            const localVarPath = `/waiting-list/{ambulanceId}/entries`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * By using ambulanceId and entryId you can details of particular entry item ambulance.
         * @summary Provides details about waiting list entry
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {string} entryId pass the id of the particular entry in the waiting list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWaitingListEntry: async (ambulanceId: string, entryId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('getWaitingListEntry', 'ambulanceId', ambulanceId)
            // verify required parameter 'entryId' is not null or undefined
            assertParamExists('getWaitingListEntry', 'entryId', entryId)
            const localVarPath = `/waiting-list/{ambulanceId}/entries/{entryId}`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)))
                .replace(`{${"entryId"}}`, encodeURIComponent(String(entryId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Use this method to update content of the waiting list entry.
         * @summary Updates specific entry
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {string} entryId pass the id of the particular entry in the waiting list
         * @param {WaitingListEntry} waitingListEntry Waiting list entry to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWaitingListEntry: async (ambulanceId: string, entryId: string, waitingListEntry: WaitingListEntry, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('updateWaitingListEntry', 'ambulanceId', ambulanceId)
            // verify required parameter 'entryId' is not null or undefined
            assertParamExists('updateWaitingListEntry', 'entryId', entryId)
            // verify required parameter 'waitingListEntry' is not null or undefined
            assertParamExists('updateWaitingListEntry', 'waitingListEntry', waitingListEntry)
            const localVarPath = `/waiting-list/{ambulanceId}/entries/{entryId}`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)))
                .replace(`{${"entryId"}}`, encodeURIComponent(String(entryId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(waitingListEntry, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AmbulanceWaitingListApi - functional programming interface
 * @export
 */
export const AmbulanceWaitingListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AmbulanceWaitingListApiAxiosParamCreator(configuration)
    return {
        /**
         * Use this method to store new entry into the waiting list.
         * @summary Saves new entry into waiting list
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {WaitingListEntry} waitingListEntry Waiting list entry to store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWaitingListEntry(ambulanceId: string, waitingListEntry: WaitingListEntry, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WaitingListEntry>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWaitingListEntry(ambulanceId, waitingListEntry, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Use this method to delete the specific entry from the waiting list.
         * @summary Deletes specific entry
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {string} entryId pass the id of the particular entry in the waiting list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWaitingListEntry(ambulanceId: string, entryId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWaitingListEntry(ambulanceId, entryId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * By using ambulanceId you get list of entries in ambulance    witing  list
         * @summary Provides the ambulance waiting list
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWaitingListEntries(ambulanceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WaitingListEntry>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWaitingListEntries(ambulanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * By using ambulanceId and entryId you can details of particular entry item ambulance.
         * @summary Provides details about waiting list entry
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {string} entryId pass the id of the particular entry in the waiting list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWaitingListEntry(ambulanceId: string, entryId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WaitingListEntry>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWaitingListEntry(ambulanceId, entryId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Use this method to update content of the waiting list entry.
         * @summary Updates specific entry
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {string} entryId pass the id of the particular entry in the waiting list
         * @param {WaitingListEntry} waitingListEntry Waiting list entry to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWaitingListEntry(ambulanceId: string, entryId: string, waitingListEntry: WaitingListEntry, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WaitingListEntry>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWaitingListEntry(ambulanceId, entryId, waitingListEntry, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AmbulanceWaitingListApi - factory interface
 * @export
 */
export const AmbulanceWaitingListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AmbulanceWaitingListApiFp(configuration)
    return {
        /**
         * Use this method to store new entry into the waiting list.
         * @summary Saves new entry into waiting list
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {WaitingListEntry} waitingListEntry Waiting list entry to store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWaitingListEntry(ambulanceId: string, waitingListEntry: WaitingListEntry, options?: any): AxiosPromise<WaitingListEntry> {
            return localVarFp.createWaitingListEntry(ambulanceId, waitingListEntry, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this method to delete the specific entry from the waiting list.
         * @summary Deletes specific entry
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {string} entryId pass the id of the particular entry in the waiting list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWaitingListEntry(ambulanceId: string, entryId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteWaitingListEntry(ambulanceId, entryId, options).then((request) => request(axios, basePath));
        },
        /**
         * By using ambulanceId you get list of entries in ambulance    witing  list
         * @summary Provides the ambulance waiting list
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWaitingListEntries(ambulanceId: string, options?: any): AxiosPromise<Array<WaitingListEntry>> {
            return localVarFp.getWaitingListEntries(ambulanceId, options).then((request) => request(axios, basePath));
        },
        /**
         * By using ambulanceId and entryId you can details of particular entry item ambulance.
         * @summary Provides details about waiting list entry
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {string} entryId pass the id of the particular entry in the waiting list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWaitingListEntry(ambulanceId: string, entryId: string, options?: any): AxiosPromise<WaitingListEntry> {
            return localVarFp.getWaitingListEntry(ambulanceId, entryId, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this method to update content of the waiting list entry.
         * @summary Updates specific entry
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {string} entryId pass the id of the particular entry in the waiting list
         * @param {WaitingListEntry} waitingListEntry Waiting list entry to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWaitingListEntry(ambulanceId: string, entryId: string, waitingListEntry: WaitingListEntry, options?: any): AxiosPromise<WaitingListEntry> {
            return localVarFp.updateWaitingListEntry(ambulanceId, entryId, waitingListEntry, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AmbulanceWaitingListApi - interface
 * @export
 * @interface AmbulanceWaitingListApi
 */
export interface AmbulanceWaitingListApiInterface {
    /**
     * Use this method to store new entry into the waiting list.
     * @summary Saves new entry into waiting list
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {WaitingListEntry} waitingListEntry Waiting list entry to store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    createWaitingListEntry(ambulanceId: string, waitingListEntry: WaitingListEntry, options?: AxiosRequestConfig): AxiosPromise<WaitingListEntry>;

    /**
     * Use this method to delete the specific entry from the waiting list.
     * @summary Deletes specific entry
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {string} entryId pass the id of the particular entry in the waiting list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    deleteWaitingListEntry(ambulanceId: string, entryId: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * By using ambulanceId you get list of entries in ambulance    witing  list
     * @summary Provides the ambulance waiting list
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    getWaitingListEntries(ambulanceId: string, options?: AxiosRequestConfig): AxiosPromise<Array<WaitingListEntry>>;

    /**
     * By using ambulanceId and entryId you can details of particular entry item ambulance.
     * @summary Provides details about waiting list entry
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {string} entryId pass the id of the particular entry in the waiting list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    getWaitingListEntry(ambulanceId: string, entryId: string, options?: AxiosRequestConfig): AxiosPromise<WaitingListEntry>;

    /**
     * Use this method to update content of the waiting list entry.
     * @summary Updates specific entry
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {string} entryId pass the id of the particular entry in the waiting list
     * @param {WaitingListEntry} waitingListEntry Waiting list entry to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    updateWaitingListEntry(ambulanceId: string, entryId: string, waitingListEntry: WaitingListEntry, options?: AxiosRequestConfig): AxiosPromise<WaitingListEntry>;

}

/**
 * AmbulanceWaitingListApi - object-oriented interface
 * @export
 * @class AmbulanceWaitingListApi
 * @extends {BaseAPI}
 */
export class AmbulanceWaitingListApi extends BaseAPI implements AmbulanceWaitingListApiInterface {
    /**
     * Use this method to store new entry into the waiting list.
     * @summary Saves new entry into waiting list
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {WaitingListEntry} waitingListEntry Waiting list entry to store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApi
     */
    public createWaitingListEntry(ambulanceId: string, waitingListEntry: WaitingListEntry, options?: AxiosRequestConfig) {
        return AmbulanceWaitingListApiFp(this.configuration).createWaitingListEntry(ambulanceId, waitingListEntry, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use this method to delete the specific entry from the waiting list.
     * @summary Deletes specific entry
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {string} entryId pass the id of the particular entry in the waiting list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApi
     */
    public deleteWaitingListEntry(ambulanceId: string, entryId: string, options?: AxiosRequestConfig) {
        return AmbulanceWaitingListApiFp(this.configuration).deleteWaitingListEntry(ambulanceId, entryId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * By using ambulanceId you get list of entries in ambulance    witing  list
     * @summary Provides the ambulance waiting list
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApi
     */
    public getWaitingListEntries(ambulanceId: string, options?: AxiosRequestConfig) {
        return AmbulanceWaitingListApiFp(this.configuration).getWaitingListEntries(ambulanceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * By using ambulanceId and entryId you can details of particular entry item ambulance.
     * @summary Provides details about waiting list entry
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {string} entryId pass the id of the particular entry in the waiting list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApi
     */
    public getWaitingListEntry(ambulanceId: string, entryId: string, options?: AxiosRequestConfig) {
        return AmbulanceWaitingListApiFp(this.configuration).getWaitingListEntry(ambulanceId, entryId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use this method to update content of the waiting list entry.
     * @summary Updates specific entry
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {string} entryId pass the id of the particular entry in the waiting list
     * @param {WaitingListEntry} waitingListEntry Waiting list entry to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApi
     */
    public updateWaitingListEntry(ambulanceId: string, entryId: string, waitingListEntry: WaitingListEntry, options?: AxiosRequestConfig) {
        return AmbulanceWaitingListApiFp(this.configuration).updateWaitingListEntry(ambulanceId, entryId, waitingListEntry, options).then((request) => request(this.axios, this.basePath));
    }
}


