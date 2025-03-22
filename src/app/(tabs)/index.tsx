import TabScreenWrapper from "@/s-components/layouts/TabsWrapper";
import Header from "@/s-components/layouts/Header";
import NearbyTournamentsSection from "@/s-components/events/NearbyTournamentsSection";
import {mockedEvents} from "../../mocks/mockedEvents";

export default function () {
        return (
            <TabScreenWrapper>
                    <Header/>
                    <NearbyTournamentsSection
                        events={mockedEvents}
                        onLocationSearch={() => console.log('Ricerca GPS')}
                    />
            </TabScreenWrapper>
        );
}