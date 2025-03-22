import TabScreenWrapper from "@/s-components/layouts/TabsWrapper";
import Header from "@/s-components/layouts/Header";
import NearbyTournamentsSection from "@/s-components/events/NearbyTournamentsSection";
import {mockedEvents} from "../../mocks/mockedEvents";
import LoreCounterButton from "@/s-components/game/LoreCounterButton";
import SearchInput from "@/s-components/ui/SearchInput";

export default function () {
        return (
            <TabScreenWrapper>
                    <Header/>
                    {/*<SearchInput placeholder="Cerca torneo per città" />*/}
                    {/*<NearbyTournamentsSection*/}
                    {/*    events={mockedEvents}*/}
                    {/*    onLocationSearch={() => console.log('Ricerca GPS')}*/}
                    {/*/>*/}
                    {/*<LoreCounterButton/>*/}
            </TabScreenWrapper>
        );
}