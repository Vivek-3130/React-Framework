import conf from "../conf/conf";
import { Client, Account , ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create
                (ID.unique(), email, password, name)

            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw new Error("Failed to create account");

        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession
                (email, password)
        } catch (error) {
            throw new Error("Failed to login");
        }
    }

    async getCurrentUser() {
        try {
            this.account.get();
        } catch (error) {
            throw new Error("Failed to get current user");
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSession();
        } catch (error) {
            throw new Error("Failed to logout");
        }
    }
}


const authService = new AuthService();
export default authService;