import {WinsAnalysis} from './analyzers/WinsAnalysis';
import {MatchData} from './MatchData';
import {HtmlReports} from './reportTargets/HtmlReports';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	static WinsAnalysisWithHtmlReport(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new HtmlReports());
	}

	constructor(public analyzer: Analyzer, public OutputTarget: OutputTarget) {}

	buildAndPrintReport(matches: MatchData[]): void {
		const output = this.analyzer.run(matches);
		this.OutputTarget.print(output);
	}
}
