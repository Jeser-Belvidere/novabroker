<script setup lang="ts">
import type { INewsTableColumn, INewsTableData } from '~/types/news';

interface IProps {
    columns: INewsTableColumn[]
    data: INewsTableData[];
    caption?: string
}

const props = defineProps<IProps>()
</script>

<template>
    <div class="table-wrapper">
        <table>
            <caption v-if="props.caption">
                {{ props.caption }}
            </caption>
            <thead>
                <tr>
                    <th v-for="column in props.columns" :key="column.key" scope="col">{{ column.shownName }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="rowData in props.data" :key="rowData.key">
                    <td v-for="column in props.columns" :key="column.key">{{ rowData[column.key] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="css" scoped>
.table-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: auto;
    width: 100%;
    margin: auto;
}

table {
    border-collapse: separate;

    th,
    td {
        border: 1px solid var(--warm-beige);
        padding: 8px;
        text-align: center;
        letter-spacing: 2px;
    }

    th {
        font-size: 1.3rem;
    }

    td {
        font-size: 1.1rem;
    }

}
</style>