import { appStore } from "../../stores/redux-store";
import { Entity } from "../../types/entity-types";

export class EntityControlUtils {
  static getEntityNamesAndIds(
    entities: Entity[] = appStore.getState().entity.entities
  ) {
    return entities.map((entity) => {
      return {
        entityId: entity.entityId,
        entityName: entity.entityName,
      };
    });
  }

  static getEntitiesAndCount(lowerIndex: number, upperIndex: number) {
    const entities = appStore.getState().entity.entities;

    // Later on, make an API call here and store the result in the store, for now, we are just fetching the entities from the store
    return {
      entities: entities.slice(lowerIndex, upperIndex),
      count: entities.length,
    };
  }
}
