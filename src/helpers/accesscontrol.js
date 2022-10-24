import { AccessControl } from "accesscontrol";
import { roles, resource } from "./rbac";

const { admin, sysAdmin, sysReviewer, superUser, owner } = roles;
const { user, product, categories, subCategories } = resource;

const ac = new AccessControl();
const allResource = Object.values(resource);

ac.grant(sysAdmin)
  .create(allResource)
  .read(allResource)
  .update(allResource)
  .delete(resource);

ac.grant(sysReviewer)
  .create()
  .read(product, categories, subCategories)
  .update()
  .delete();

ac.grant(owner).create().read().update().delete();

ac.grant(admin).create().read().update().delete();
