import {
	CurrenciesApi,
	StatsApi,
	GroupsApi,
	FunctionsApi,
	Configuration,
	ProfilesApi,
} from "./api";
import { MessagingApi } from "./messaging";

export class Indiebackend {
	profiles: ProfilesApi;
	currencies: CurrenciesApi;
	groups: GroupsApi;
	stats: StatsApi;
	functions: FunctionsApi;
	messaging: MessagingApi;

	constructor(appSecret: string, appId: string) {
		const cfg = new Configuration({
			apiKey: appSecret,
			basePath:
				process.env.IDB_API_HOST ||
				"http://admin.api.dev.indiebackend.com",
		});

		this.profiles = new ProfilesApi(cfg);
		this.currencies = new CurrenciesApi(cfg);
		this.groups = new GroupsApi(cfg);
		this.functions = new FunctionsApi(cfg);
		this.stats = new StatsApi(cfg);
		this.messaging = new MessagingApi(appSecret, appId);
	}
}
