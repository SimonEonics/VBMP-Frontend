/**
 * VIBMPF App API
 * VIBMPF App API documentation
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Candidate } from './candidate';


export interface Education { 
    id?: string;
    title?: string;
    company?: string;
    location?: string;
    sdate?: string;
    edate?: string;
    description?: string;
    candidate?: Candidate;
}

