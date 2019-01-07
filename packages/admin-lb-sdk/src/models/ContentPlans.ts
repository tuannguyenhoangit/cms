/* tslint:disable */
import { StorageFile, SystemDomain, SystemUser } from '../index'

declare var Object: any
export interface ContentPlanInterface {
  name?: string
  detail?: string
  tag?: string
  userCreated: number
  leader: string
  id?: number
  startDate: Date
  endDate: Date
  sourcePlace: string
  targetPlace: string
  travelLength: number
  status: string
  systemDomainId?: string
  systemUserId?: string
  storageFileId?: string
  created?: Date
  modified?: Date
  storageFile?: StorageFile
  systemDomain?: SystemDomain
  systemUser?: SystemUser
}

export class ContentPlan implements ContentPlanInterface {
  name: string
  detail: string
  tag: string
  userCreated: number
  leader: string
  id: number
  startDate: Date
  endDate: Date
  sourcePlace: string
  targetPlace: string
  travelLength: number
  status: string
  systemDomainId: string
  systemUserId: string
  storageFileId: string
  created: Date
  modified: Date
  storageFile?: StorageFile
  systemDomain?: SystemDomain
  systemUser?: SystemUser
  constructor(data?: ContentPlanInterface) {
    Object.assign(this, data)
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContentPlan`.
   */
  public static getModelName() {
    return 'ContentPlan'
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContentProduct for dynamic purposes.
  **/
  public static factory(data: ContentPlanInterface): ContentPlan {
    return new ContentPlan(data)
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'ContentPlan',
      plural: 'ContentPlans',
      path: 'ContentPlans',
      properties: {
        name: {
          name: 'name',
          type: 'string',
        },
        detail: {
          name: 'detail',
          type: 'string',
        },
        tag: {
          name: 'tag',
          type: 'string',
        },
        userCreated: {
          name: 'userCreated',
          type: 'number',
        },
        leader: {
          name: 'leader',
          type: 'string',
        },
        startDate: {
          name: 'startDate',
          type: 'Date',
        },
        endDate: {
          name: 'endDate',
          type: 'Date',
        },
        sourcePlace: {
          name: 'sourcePlace',
          type: 'string',
        },
        targetPlace: {
          name: 'targetPlace',
          type: 'string',
        },
        travelLength: {
          name: 'travelLength',
          type: 'number',
        },
        status: {
          name: 'status',
          type: 'string',
        },
        id: {
          name: 'id',
          type: 'number',
        },
        systemDomainId: {
          name: 'systemDomainId',
          type: 'string',
        },
        systemUserId: {
          name: 'systemUserId',
          type: 'string',
        },
        storageFileId: {
          name: 'storageFileId',
          type: 'string',
        },
        created: {
          name: 'created',
          type: 'Date',
        },
        modified: {
          name: 'modified',
          type: 'Date',
        },
      },
      relations: {
        storageFile: {
          name: 'storageFile',
          type: 'StorageFile',
          model: 'StorageFile',
        },
        systemDomain: {
          name: 'systemDomain',
          type: 'SystemDomain',
          model: 'SystemDomain',
        },
        systemUser: {
          name: 'systemUser',
          type: 'SystemUser',
          model: 'SystemUser',
        },
      },
    }
  }
}
