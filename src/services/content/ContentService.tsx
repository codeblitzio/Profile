import json from "./content.json";

interface IEducation{
    qualifications: string[],
    certifications: string[]
};

interface IHistory{
    company: string,
    title: string,
    start: string,
    end: string,
    description: string
};

interface ISocials {
    linkedInUrl: string,
    twitterUrl: string
};

interface IContent {
    intro: string[],
    summary: string[],
    education: IEducation,
    skills: string[],
    history: IHistory[],
    socials: ISocials,
    about: string[]
};

interface IContentService {
    
    getContent(): IContent;

    getIntro(): string[];

    getSummary(): string[];

    getEducation(): IEducation;

    getHistory(): IHistory[];

    getSkills(): string[];

    getSocials(): ISocials;

    getAbout(): string[];
};

class ContentService implements IContentService{

    getContent(): IContent {
        return json as IContent;    
    }

    getIntro(): string[] {
        return (json as IContent).intro;    
    }

    getSummary(): string[] {
        return (json as IContent).summary;    
    }

    getEducation(): IEducation {
        return (json as IContent).education;    
    }

    getHistory(): IHistory[] {
        return (json as IContent).history;    
    }

    getSkills(): string[] {
        return (json as IContent).skills;    
    }

    getSocials(): ISocials {
        return (json as IContent).socials;    
    }

    getAbout(): string[] {
        return (json as IContent).about;    
    }
};

export type { IContent, ISocials, IEducation, IHistory, IContentService };
export default ContentService;
